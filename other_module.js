var Hydra, Other;
Hydra = require('hydra.js');
Other = {};
Other.original = Hydra.module.register('other', function(bus)
{
    return {
        init: function()
        {
            console.log('init other', +new Date());
            bus.subscribeTo('channel', 'lol:say', function(oData)
            {
                console.log('lol', +new Date(), oData);
            }, this);
        }
    };
});
Other.extended = Other.original.extend('other2', function(bus)
{
    return {
        init: function()
        {
            console.log('init other2', +new Date());
            bus.subscribeTo('channel', 'lol:say', function(oData)
            {
                console.log('lol2', +new Date(), oData);
            }, this);
        },
        onDestroy: function()
        {
            bus.unsubscribeFrom('channel', 'lol:say', this);
        }
    };
});
module.exports = Other;