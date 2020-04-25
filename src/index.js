
window.OrderDataLib = class OrderDataLib {
    constructor(options = undefined) {
        console.log('order-data library version:');
        if(options === undefined) {
            console.log('no option data was supplied to order-data library');
        } else {
            this.orderViewService = new OrderViewService(options)
        }
    }

    // get the order data
    getEnrichOrder(tlog, tables, items, users, promotions, modifierGroups, tlogId, offers) {
        return this.orderViewService.TimeLine.enrichOrder({tlog, tables, items, users, promotions, modifierGroups, tlogId, offers})
    }
};
