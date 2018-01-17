/**
 * Created by YundanChai on 2017/7/20.
 */
export default function config($stateProvider,$urlRouterProvider) {
   /* $urlRouterProvider.otherwise('/index');
    let mainState = {
        name:'index',
        url:"/index",
        template: require('./view/main.html'),
        controller: 'LoginController'
    };

    let listState = {
        name:'booklist',
        url:"/{bookType:[0-9]{1,4}}",
        views:{
            "":{template:require('./view/booklist.html')},
            'bookType@booklist':{template:require('./view/bookType.html')},
            'bookgrid@booklist':{template:require('./view/bookgrid.html')}
        },
        //controller: 'DetailController'
    };
    $stateProvider.state('main',mainState );
    $stateProvider.state('main.booklist',listState );*/


    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index',{
            url:'/index',
            views:{
                '':{
                    template:require('./view/home.html')
                },
                'main@index':{
                    template:require('./view/main.html'),//main.html
                    //controller:'TestParentCtrl'
                }
            }
    })
        .state('booklist',{
            url:"/{bookType:[0-9]{1,4}}",
            views:{
                "":{template:require('./view/booklist.html'),

                },
                'bookType@booklist':{template:require('./view/bookType.html'),
                },
                'bookgrid@booklist':{template:require('./view/bookgrid.html'),
                    controller:'DetailListController'
                }
            },

        })
        .state('bookDetail',{
            url:'/bookdetail/:code',
            template: require('./view/detail.html'),
            controller:'BookDetailController'
        });

}



