/**
  * 播放canvas动画
  * @param {Element} canvas canvas对象
  * @param {Array} imgList 播放的图片资源列表
  * @param {Number} timing 播放每一帧的时长
  * @param {Number} swidth 被剪切图像的宽度
  * @param {Number} sheight 被剪切图像的高度
  * @param {Number} sx 开始剪切的 x 坐标位置
  * @param {Number} sy 开始剪切的 y 坐标位置
  * @param {Number} x 在画布上放置图像的 x 坐标位置
  * @param {Number} y 在画布上放置图像的 y 坐标位置
  */
 export const playPictureWithCanvas = (canvas, imgList, timing, swidth, sheight, sx = 0, sy = 0, x = 0, y = 0) => {
    const width = canvas.offsetWidth
    const height = canvas.offsetHeight
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    let cur = 0
    const imgArr = []
    const imgObj = {}
    const imgLength = imgList.length
    const renderImg = pic => {
        if (cur >= imgLength) {
            cur = 0
        } else {
            cur++
        }
        //清除 之前的 图片墨迹。
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(
            pic,
            sx, sy, swidth, sheight, x, y, width, height
        )
    }
    for (let i = 0; i < imgLength; i++) {
        const url = imgList[i]
        imgArr.push(url)
        //加载图片
        const img = new Image()
        img.src = url
        img.onload = () => {
            imgObj[url] = img
        }
    }
    let timer = setInterval(() => {
        const url = imgArr[cur]
        /* 如果已经加载过图片,取缓存的 */
        if ( imgObj[url] ) {
            renderImg(imgObj[url])
        } else {
            cur = 0
            return false
        }
    }, timing)
    return () => {
        clearInterval(timer)
        timer = null
    }
}