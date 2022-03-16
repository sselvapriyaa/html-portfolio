var sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];
var saleitem = [];
sales.forEach(function (listitem) {
    if (listitem.discount) {
      var saleAmount = (listitem.original - listitem.original * listitem.discount);
      var saleAmountrounded = Math.round((saleAmount + Number.EPSILON) * 100) /100;
      var totalDiscount = (listitem.stock * saleAmountrounded);
      var totalDiscountrounded = Math.round((totalDiscount + Number.EPSILON) * 100) /100;
      saleitem.push({       
        Item: listitem.item,
        Stock: listitem.stock,
        Original: listitem.original,
        Discount: listitem.discount,
        Sale: saleAmountrounded,    
        Total: totalDiscountrounded,       
      });
    } else {
      saleitem.push({
        Item: listitem.item,
        Stock: listitem.stock,
        Original: listitem.original,
        Sale: listitem.original,
        Total: (listitem.stock * listitem.original),
      });
    }
  });   
  console.log(saleitem);





