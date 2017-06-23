// 常量的key值
const DataKey = 'cartData'

// 导出，留给外界使用
export default {

    // 想localStroage中保存数据
    saveData(item) {
        // 数据不存在，直接返回
        if (!item) { return }

        // 数据存入
        // 需要首先获取num的值，如果是0就删除，如果是1其它的就存入
        let arrs = this.getData()

        // 首先判断数组中是否存在相同对象
        var flag = -1;
        for (var i = 0; i < arrs.length; i++) {
            var elem = arrs[i];
            if (elem.id === item.id) { // 购物车中存在此种商品
                flag = i;
                break;
            }
        }
        if (flag !== -1) { // 数组中已经存在了
            // 判断数量
            if (item.num !== 0) { // 修改
                arrs[flag].num = item.num
            } else { // 删除
                arrs.splice(flag, 1)
            }
        } else { // 数组中不存在，直接推入
            arrs.push(item)
        }

        // 存入
        sessionStorage.setItem(DataKey, JSON.stringify(arrs))
        return true
    },

    // 从localStroage中取出数据
    getData() {
        var arrs = JSON.parse(sessionStorage.getItem(DataKey))

        // 不为空，并且有元素
        return (arrs && arrs.length !== 0) ? arrs : []
    },


    // 根据名称，获取数量
    getNumWithName(id) {
        if (!id) { return }
        for (let item of this.getData()) {
            if (item.id === id) {
                return item.num;
            }
        }
        return 0;
    }
}
