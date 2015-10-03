# b-add

Небольшая утилита для быстрого добавления БЭМ блоков в файловую систему вашего проекта.

## Возможности
* Автоматическое создание файлов и директорий
* Настройка расширения файлов для каждого типа БЭМ класса (блока, элемента и их модификаторов)
* Настройка разделителей для модификаторов и элементов

## Использование
<pre>
user:~/project$ b_add logo__img_size_big container container__sidebar
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

## Установка
<pre>
root:~$ npm install -g b_add
</pre>

## Настройка
Все параметры доступны в файле b_add.json

**blockLocation**
Путь к папке с блоками

**elem**
Разделитель для элемента

**mod** 
Разделитель для модификатора

**files**
Настройки расширений для файлов

* **block**
Массив расширений файлов блока
* **blockMod**
Массив расширений файлов модификатора блока
* **elem**
Массив расширений файлов элемента
* **elemMod**
Массив расширений файлов модификатора элемента

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

## Лицезия
Проект распространяется на условиях лицензии MIT.
Подробнее см. файл LICENSE

## Используемые модули
* [bem-naming](https://github.com/bem/bem-naming)
* [create-file](https://github.com/joakimbeng/create-file)
* [jsonfile](https://github.com/jprichardson/node-jsonfile)

!["Yandex.Metrika counter"](https://mc.yandex.ru/watch/32839275)