### 参数说明
| 参数 | 类型 | 是否必须 | 默认值 | 说明 |
| - | - | - | - | - |
| canvas | element | 是 | - | canvas对象 |
| imgList | arry |  是 | - | 图片资源列表 |
| timing | number | 是 | - | 一帧的时长 |
| swidth | number | 是 | - | 被剪切图像的宽度 |
| sheight | number | 是 |  - | 被剪切图像的高度 |
| sx | number | 否 | 0 | 开始剪切的 x 坐标位置 |
| sy | number | 否 |  0 | 开始剪切的 y 坐标位置 |
| x | number | 否 | 0 | 在画布上放置图像的 x 坐标位置 |
| y |  number | 否 |  0 | 在画布上放置图像的 y 坐标位置 |
|

### 示例用法
```
import { playPictureWithCanvas } from 'play-picture-with-canvas'

// 图片资源列表
let imgList = []

for (let i = 0; i < 140; i++) {
    const num = String(i).padStart(String(140).length, 0)
    const img = require('@/static/img/example/person/2_00' + num + '.png')
    // 或直接引用网络资源路径: const img = 'http://xxx.net/xxx/xxx.png'
    imgList.push(img)
}

// 返回一个清除定时器的方法
const clearTimer = playPictureWithCanvas(canvans, imgList, 66, 889, 500)

// 在需要清除的地方调用一下即可
clearTimer()
```

