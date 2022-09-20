const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

module.exports = {
  formatTime,
  roundRect:roundRect
}
  /** @description canvas 绘制自定义圆角的矩形(默认填充色)-hyf
   *  x-位置x坐标, y-位置y坐标, w-元素宽度, h-元素高度, r-圆角
   *  if config = color // 默认填充色
   * else config = {
   * type: fill / stroke / both,填充/描边/填充和描边
   * fillColor: color, //填充色
   * strokeColor: color, //描边色
   * round:{ // 配置哪个方向的角是圆角，默认不传全是圆角
   *   leftTop: boole, // 是否圆角
   *   leftBottom: boole, // 是否圆角
   *   rightTop: boole, // 是否圆角
   *   rightBottom: boole, // 是否圆角
   * }
    }**/
function roundRect(ctx, x, y, w, h, r, config){
      let color = 'transparent'
      if (typeof config === 'string') {
        color = config
      }
      ctx.save()
      // 开始绘制
      ctx.beginPath()
      // 因为边缘描边存在锯齿，最好指定使用 transparent 填充
      if (config.type) {
        if (config.type === 'fill') {
          ctx.setFillStyle(config.fillColor || 'transparent')
        } else if (config.type === 'stroke') {
          ctx.setStrokeStyle(config.strokeColor || 'transparent')
        } else if (config.type === 'both') {
          ctx.setFillStyle(config.fillColor || 'transparent')
          ctx.setStrokeStyle(config.strokeColor || 'transparent')
        }
      } else {
        ctx.setFillStyle(color)
      }
      if (!config.round || config.round.leftTop) {
        // 绘制左上角圆弧
        ctx.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5)
        // 绘制border-top
        ctx.moveTo(x + r, y)
      } else {
        // 绘制border-top
        ctx.moveTo(x, y + r)
        ctx.lineTo(x, y)
        ctx.lineTo(x + r, y)
      }
      ctx.lineTo(x + w - r, y)
      if (!config.round || config.round.rightTop) {
        // 绘制右上角圆弧
        ctx.arc(x + w - r, y + r, r, Math.PI * 1.5, Math.PI * 2)
      } else {
        ctx.lineTo(x + w - r, y)
        ctx.lineTo(x + w, y)
        ctx.lineTo(x + w, y + r)
      }
      // 绘制border-right
      ctx.lineTo(x + w, y + h - r)
      if (!config.round || config.round.rightBottom) {
        // 绘制右下角圆弧
        ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * 0.5)
      } else {
        ctx.lineTo(x + w, y + h - r)
        ctx.lineTo(x + w, y + h)
        ctx.lineTo(x + w - r, y + h)
      }
      // 绘制border-bottom
      ctx.lineTo(x + r, y + h)
      if (!config.round || config.round.leftBottom) {
        // 绘制左下角圆弧
        ctx.arc(x + r, y + h - r, r, Math.PI * 0.5, Math.PI)
      } else {
        ctx.lineTo(x + r, y + h)
        ctx.lineTo(x, y + h)
        ctx.lineTo(x, y + h - r)
      }
      // 绘制border-left
      ctx.lineTo(x, y + r)
  
      if (config.type) {
        if (config.type === 'fill') {
          ctx.fill()
        } else if (config.type === 'stroke') {
          ctx.stroke()
        } else if (config.type === 'both') {
          ctx.stroke()
          ctx.fill()
        }
      } else {
        ctx.fill()
      }
  
      ctx.closePath()
      // 剪切
      ctx.clip()
      ctx.restore()
    }
  