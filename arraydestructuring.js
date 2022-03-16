
var sales = [
    { item: "PS4 Pro", stock: 3, original: 399.99 },
    { item: "Xbox One X", stock: 1, original: 499.99, discount: 0.1 },
    { item: "Nintendo Switch", stock: 4, original: 299.99 },
    { item: "PS2 Console", stock: 1, original: 299.99, discount: 0.8 },
    { item: "Nintendo 64", stock: 2, original: 199.99, discount: 0.65 }
  ];
var result = [];
sales.forEach(function (record) {
    if (record.discount) {
      var saleAmount = (record.original - record.original * record.discount);
      var saleAmountrounded = Math.round((saleAmount + Number.EPSILON) * 100) /100;
      var totalDiscount = (record.stock * saleAmountrounded);
      var totalDiscountrounded = Math.round((totalDiscount + Number.EPSILON) * 100) /100;
     
      result.push({       
        item: record.item,
        stock: record.stock,
        original: record.original,
        discount: record.discount,
        sale: saleAmountrounded,    
        total: totalDiscountrounded,       
      });
    } else {
      result.push({
        item: record.item,
        stock: record.stock,
        original: record.original,
        sale: record.original,
        total: (record.stock * record.original),
      });
    }
  });   
  console.log(result);





