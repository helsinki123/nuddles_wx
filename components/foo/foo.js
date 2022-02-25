// components/foo/foo.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // name:"zzm"
        age:{
            type:Number,
            value:25
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
    name:"zzm",
    arr:{"arr2":[1,2,3,4],"name":"zzm"}
    },

    /**
     * 组件的方法列表
     */
    methods: {
        getName(){
            console.log(this.properties.age);
            console.log(this.data.name);
            this.triggerEvent('onCheckbox', "zzm")
            this.setData({name:"邹智敏"})
            // this.data.name = "邹智敏"
            console.log(this.data.name);
        }
    }
})
