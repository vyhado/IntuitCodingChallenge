function getPath(value) {

    var data = {"itemList": {
                  "items": [
                    { "id": "item1"},
                    { "id": "item2","label": "Item 2" },
                    {"id": "item3"},
                    {"id": "item4"},
                    {"id": "item5"},
                    {"id": "subItem1",
                        "subItems": [
                            {"id": "subItem1Item1","label": "SubItem 1"},
                            {"id": "subItem1Item2","label": "SubItem 2"},
                            {"id": "subItem1Item3","label": "SubItem 3"}
                        ]
                    },
                    {"id": "item6"},
                    {"id": "item7","label": "Item 7"},
                    {"id": "subItem2",
                        "subItems": [
                             {"id": "item1","label": "SubItem 2 item1"}
                         ]
                    }
    ]}};


    var resultArr = [];  // return in array in case there are multiple paths found 
    for (var i = 0; i < data.itemList.items.length; i++) {
        var result;
        var id = data.itemList.items[i].id;
        var label = data.itemList.items[i].label;
        var str1 = "/itemList/items[";
        var idStr = "]/id";
        var labelStr = "]/label";
        var subItemIdStr = "]/id";
        var subItemLabelStr = "]/label";
        if (id === value) {
              result = str1 + i + idStr;
              resultArr.push (result);
        } else if (label === value) {     
              result = str1 + i + labelStr;
              resultArr.push (result);
        } else if (id.search ("subItem") >= 0) {
            for (var j=0; j < data.itemList.items[i].subItems.length; j++ ) {
                id = data.itemList.items[i].subItems[j].id;
                label = data.itemList.items[i].subItems[j].label;
                if (id === value) {    
                      result = str1 + i + "]/id/subItems[" + j + "]/id";
                      resultArr.push (result);
                } else if (label === value) {
                    result = "/itemList/items[" + i + "]/id/subItems[" + j + "]/label";
                    resultArr.push (result);
                }
            }
        }
    }
    return resultArr;
}

var paths;
paths = getPath("SubItem 3");
window.alert(paths);
paths = getPath("SubItem 2 item1");
window.alert (paths);
paths = getPath("item1");
window.alert (paths);
