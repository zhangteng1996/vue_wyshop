// 引入ajax模块
import ajax from './ajax'

//使用代理
const prefix = '/api'

// 请求首页数据
export const reqMsiteData = () => ajax('/home');

// 请求分类列表哦数据
export const reqCateList = () => ajax('/classify');


// 获取其它组件数据
export const reqTabData = (page, size, tabId) => ajax(`${prefix}/topic/v1/find/getTabData.json`, {page, size, tabId})

// 获取show组件买家秀数据
export const reqList = (page, size, type) => ajax(`${prefix}/topic/v1/look/getList.json`, {page, size, type})
// 获取show组件collection数据
export const reqColection = (id) => ajax(`${prefix}/topic/v1/look/getCollection.json`, {id})

// 获取搜索组件初始化数据
export const reqInitSearch = () => ajax(`${prefix}/xhr/search/init.json`, 'POST')

