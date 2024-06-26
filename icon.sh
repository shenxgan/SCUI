#!/bin/bash


# =================================
# --- 功能介绍 ---
# 快速添加/删除三方 icon 的工具
# scui 扩展图标：https://python-abc.xyz/scui-doc/demo/#/vab/iconfont
# 阿里 iconfont 地址：https://www.iconfont.cn/

# --- 参数介绍 ---
# $1 add/del, 对应添加和删除
# $2, 新图标的名称，首字母大写，驼峰格式，比如 BugFill
# $3, svg 内容，直接从 iconfont 复制即可，需要使用 '单引号' 引起来
# =================================


icon_dir="src/assets/icons"
action="$1"
name="$2"
svg="$3"
icon_fname="${name}.vue"
append="export { default as $name } from './${icon_fname}'"


if [[ "$action" == "add" ]]; then
  if [[ $# -ne 3 ]]; then
    echo "usage: $0 add {name} '{svg}'"
    echo "- name: 图标名称，首字母大写，比如 BugFill；同名会进行覆盖替换"
    echo "- svg: svg 内容，需要使用 '单引号' 引起来"
    exit -1
  fi

  cd ${icon_dir}
  cp Vue.vue ${icon_fname}

  sed -i "2c $svg" ${icon_fname}
  sed -i 's/<svg.*viewBox/  <svg viewBox/g' ${icon_fname}

  sed -i "/{ default as $name }/d" ./index.js
  sed -i "\$a $append" ./index.js

  icon=`echo "ScIcon$name" | sed -E 's/([A-Z])/-\1/g' | sed -E 's/^-//g' | tr 'A-Z' 'a-z'`
  echo $icon
  echo "<el-button icon=\"$icon\"></el-button>"
  echo "<el-icon><$icon /></el-icon>"
  echo "<el-icon><component is=\"$icon\" /></el-icon>"

elif [[ "$action" == "del" ]]; then
  cd ${icon_dir}
  rm -f ${icon_fname}
  sed -i "/{ default as $name }/d" ./index.js
  echo "删除成功"
elif [[ "$action" == "ls" ]]; then
  cd ${icon_dir}
  pwd
  ls -l
elif [[ "$action" == "url" ]]; then
  echo "https://www.iconfont.cn/"
elif [[ "$action" == "eg" || "$action" == "ex" ]]; then
  icon="sc-icon-bug-fill"
  echo "<el-button icon=\"$icon\"></el-button>"
  echo "<el-icon><$icon /></el-icon>"
  echo "<el-icon><component is=\"$icon\" /></el-icon>"
else
  echo "第一个参数不对，只允许下列值："
  echo "- 添加/替换: $0 add {name} '{svg}'"
  echo "- 删除: $0 del {name}"
  echo "- 列表: $0 ls"
  echo "- 图标地址: $0 url"
  echo "- 示例用法: $0 eg/ex"
fi
