requirejs.config({
    baseUrl:'dist',
    paths: {
        'jquery': 'lib/jquery-1.12.0.min',
        'tmpl':   'lib/tmpl'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'tmpl': {
            export:  'tmpl'
        } 
    }
});

require(['jquery', 'tmpl', 'Model', 'View', 'Controller'],


    function ($, tmpl, Model, View, Controller) {
    // This function will be called when all the dependencies
    // listed above are loaded.    
        $(function () {
            var firstToDoList = ['wash the car', 'clean the bedroom', 'walk the dog', 'make a dinner'];
            var model = new Model(firstToDoList);
            var view = new View(model);
            var controller = new Controller(model, view);
        });
    }
);