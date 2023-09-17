# click is our CLI library
import click
import openai
import os

@click.group(invoke_without_command=True)
@click.argument('file_path', type=click.Path(exists=True))
@click.pass_context
def cli(ctx, file_path):
    if ctx.invoked_subcommand is None:
        tsc(file_path)

def tsc(file_path):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Can you help me rewrite Typescript into Javascript?"},
            {"role": "assistant", "content": "Yes of course, and I will include the code surrounded by backticks: (```)"},
            {"role": "user", "content": f"Thank you! The code is ```{open(file_path).read()}```"},
        ]
    )

    # extract js code from response
    js_code = response.choices[0]["message"]["content"].split("```")[1]
    # remove first line
    js_code = js_code.split("\n", 1)[1]

    # save as js file in a ./js directory
    rel_path = os.path.relpath(file_path)
    dir_path = os.path.dirname(rel_path)
    target_dir = os.path.join(dir_path, "js")
    # create if not exists
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)
    
    file_name = os.path.splitext(os.path.basename(rel_path))[0] + ".js"
    target_file = os.path.join(target_dir, file_name)
    with open(target_file, "w+") as f:
        f.write(js_code)

if __name__ == "__main__":
    cli()