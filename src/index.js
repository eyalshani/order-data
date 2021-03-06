

window.OrderDataLib = class OrderDataLib {
    constructor(options = undefined) {
        console.log('order-data library version : ' + VERSION);
        if(options === undefined) {
            console.log('no option data was supplied to order-data library');
        } else {
            this.orderViewService = new window.OrderDataLib.OrderViewService(options)
        }
    }

    // get the order data
    getEnrichOrder(tlog, tables, items, users, promotions, modifierGroups, tlogId, offers) {
        return this.orderViewService.TimeLine.enrichOrder({tlog, tables, items, users, promotions, modifierGroups, tlogId, offers})
    }
};
