from distutils.core import setup
import setuptools
from pathlib import Path

setup(
    name='hun',
    packages=['hun'],
    py_modules=["cli"],
    version='0.0.1',
    license='Apache License 2.0',
    # Give a short description about your library
    description='',
    long_description_content_type='text/markdown',
    author='Erik Dunteman',
    author_email='erik@banana.dev',
    url='https://www.banana.dev',
    keywords=[],
    setup_requires=['wheel'],
    install_requires=[
        "Click",
        "openai==0.28.0",
    ],
    entry_points={
        'console_scripts': [
            'hun = hun:cli',
        ],
    },
    classifiers=[
        # Chose either "3 - Alpha", "4 - Beta" or "5 - Production/Stable" as the current state of your package
        'Development Status :: 3 - Alpha',
        'Intended Audience :: Developers',
        'Topic :: Software Development :: Build Tools',
        'License :: OSI Approved :: MIT License',
    ],
)
