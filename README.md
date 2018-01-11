# Bootyper

An extension of the default bootstrap3 theme for Nikola websites with improved support for Jupyter notebooks.

This theme makes two improvements to the default theme:

* Removes ugly boxes around input and output prompts
* Adds button at top of each post to hide/reveal code cells

![Visible code cells](code_on.png)
![Invisible code cells](code_off.png)


# Usage

Clone or download this repository and place it in the /themes/ directory in your Nikola installation.

In your `conf.py` file, edit the `POSTS` variable such that there is an entry of .ipynb files like so:

```
POSTS = (
    ("posts/\*.ipynb", "posts", "post_ipynb.tmpl"),
    ...
    )
```
