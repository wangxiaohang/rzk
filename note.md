vue生命周期：

beforeCreate ~ created： 期间初始化data，进行双向数据绑定
created ~ beforeMount： 期间找到el，并渲染
                          其中渲染模板的优先级为：Vue实例中render函数 > Vue实例中template > html中定义
beforeMount ~ mounted: 期间 对html中的指令进行解析绑定
mounted ~ beforeUpdate
beforeUpdate ~ Updated：data发生变化，会被依次调用

