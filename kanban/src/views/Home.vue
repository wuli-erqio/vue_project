<template>
  <el-container class="container-box">
    <el-aside>
      <el-menu :default-openeds="['1']" router>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-s-data"></i>Echars</template>
          <el-menu-item index="kanban1"><i class="el-icon-s-data"></i>看板1</el-menu-item>
          <el-menu-item index="kanban2"><i class="el-icon-s-data"></i>看板2</el-menu-item>
          <el-menu-item index="kanban3"><i class="el-icon-s-data"></i>看板3</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>JS</template>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>CSS</template>
          <el-menu-item index="button"><i class="el-icon-orange"></i>按钮</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.container-box {
  height: 100%;
}
.el-main {
  padding: 0;
}
/deep/.el-aside {
  width: 200px;
  height: 100%;
  .el-menu {
    height: 100%;
    background-color: rgb(28, 31, 80);
    border-right: none;
    .el-submenu__title {
      color: #fff;
    }
    .el-menu-item {
      color: #fff;
    }
    .el-menu-item:focus, .el-menu-item:hover, .el-submenu__title:hover {
      background-color: rgba(93, 98, 202, 0.5);
    }
  }
}
</style>
