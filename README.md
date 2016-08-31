# b-add

A small cli utility helps you to easily add BEM-blocks in the file system of your project

## Features
* Automatic creation of files and directories
* Configuring file extensions for each type of BEM class (block, element and their modifiers)
* Setting separators for modifiers and elements

## Using
<pre>
user:~/project$ b_add logo__img_size_big container__sidebar
</pre>
<pre>
user:~/project$ tree

├── app
│   └── blocks
│       ├── container
│       │   ├── __sidebar
│       │   │   ├── container__sidebar.jade
│       │   │   └── container__sidebar.styl
│       │   ├── container.jade
│       │   ├── container.styl
│       │   └── container.wiki
│       └── logo
│           ├── __img
│           │   ├── logo__img.jade
│           │   ├── logo__img.styl
│           │   └── logo__img_size_big.styl
│           ├── logo.jade
│           ├── logo.styl
│           └── logo.wiki
</pre>

## Installation
<pre>
root:~$ npm install -g b_add
</pre>

## Settings
All options are available in the file b_add.json

**blockLocation**
The path to the folder with blocks

**elem**
The separator for the element

**mod** 
The separator for the modifier

**files**
Settings extensions for files

* **block**
An array of file extensions block
* **blockMod**
An array of file extensions block modifier
* **elem**
Массив расширений файлов элемента
* **elemMod**
An array of file extensions element

<pre>
{
  "blockLocation": "./app/blocks/",
  "elem": "__",
  "mod": "_",
  "files": {
    "block": [".styl", ".jade", ".wiki"],
    "blockMod": [".styl"],
    "elem": [".styl", ".jade"],
    "elemMod": [".styl"]
  }
}
</pre>

## License
Project distributed under the MIT license.
For more information, see file LICENSE

## Used modules
* [bem-naming](https://github.com/bem/bem-naming)
* [create-file](https://github.com/joakimbeng/create-file)
* [jsonfile](https://github.com/jprichardson/node-jsonfile)

!["Yandex.Metrika counter"](https://mc.yandex.ru/watch/32839275)
