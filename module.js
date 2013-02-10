var Other,Hydra, Test;
Hydra = require('hydra.js');
Other = require('./other_module.js');

Other.original.start();

Hydra.bus.publish('channel', 'lol:say', {from: 'out_1'});

Other.original.stop();

Other.extended.start();
Other.extended.stop();
Hydra.bus.publish('channel', 'lol:say', {from: 'out_2'});

Test = Hydra.module.register('test', function(bus)
{
    return {
        init: function()
        {
            console.log('init test', +new Date());
            bus.publish('channel', 'lol:say', {from: 'in'});
            console.log('ein', +new Date());
        }
    };
});
Test.start();
