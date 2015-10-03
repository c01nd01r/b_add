var bemNaming = require('bem-naming');
var wrfile = require('create-file');
var jsonf = require('jsonfile');

var args = process.argv.slice(2);
var config = readConfig();

var naming = bemNaming({
    elem: config.elem,
    mod: config.mod
});

//Создание файлов по настройкам расширений
function createFiles(path, type) {
    config.files[type].forEach( function(item) {
        wrfile(path + item, '', function(err){
            if(err){
                process.stderr.write('Ошибка создания файла: \n' + err.message + '\n');
                process.exit(1);
            }
        })
    })

}

//Проверка введеного аргумента на валидность БЭМ нейминга
//Определение типа введеного аргумента
//Вызов соответсвующей функции
function validateArg(arg) {
    var  input =  naming.parse(arg);

    switch (true) {
        case naming.isBlock(input):
            mkBlock(input);
            break;

        case naming.isElem(input):
            mkElem(input);
            break;

        case naming.isBlockMod(input):
            mkBlockMod(input);
            break;

        case naming.isElemMod(input):
            mkElemMod(input);
            break;

        default:
            process.stderr.write('Аргумент "'+ arg + '" не является БЭМ классом \n')
            process.exit(1);
    }


}
//Создание блока
function mkBlock(input){
	var path = config.blockLocation + input.block + '/'
        + input.block;

    createFiles(path, 'block');
}

//Создание элемента блока
function mkElem(input){
    var path = config.blockLocation + input.block + '/'
        + config.elem + input.elem +'/'
        + input.block + config.elem + input.elem ;

    createFiles(path , 'elem');
    mkBlock(input);
}

//Создание модификатора блока
function mkBlockMod(input){
    var modVal = '_'+ input.modVal;

    if (input.modVal === true)  var modVal = '';

    var path = config.blockLocation + input.block + '/'
        + input.block + config.mod + input.modName +  modVal;

    createFiles(path, 'blockMod');
    mkBlock(input);
}

//Создание модификатора элемента
function mkElemMod(input){
    var modVal = '_'+ input.modVal;

    if (input.modVal === true )  var modVal = '';

    var path = config.blockLocation +input.block + '/'
        + config.elem + input.elem + '/'
        + input.block + config.elem + input.elem + config.mod + input.modName + modVal;

    createFiles(path, 'elemMod');
    mkElem(input);
}

//Чтение файла настроек b_add.json
function readConfig() {
    try {
        return  jsonf.readFileSync('b_add.json');
    } catch (err) {
        process.stderr.write('Ошибка чтения конфигурационного файла b_add.json: \n' + err.message + '\n');
        process.exit(1);
    }
};

//Запуск скрипта
(function main(){
    if(!args[0]) {
        process.stderr.write('Отсутвуют аргументы. Используйте валидный БЭМ класс \n');
        process.exit(1);
    }
	args.forEach(function(item){
      validateArg(item);
	});
}).call(this);