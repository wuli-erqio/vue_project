<template>
  <el-container class="container-box">
    <el-aside>
      <el-menu :default-openeds="['1']" router>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-s-data"></i>Echars</template>
          <el-menu-item index="kanban1"><i class="el-icon-s-data"></i>看板1</el-menu-item>
          <el-menu-item index="kanban2"><i class="el-icon-s-data"></i>看板2</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>导航二</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>导航三</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
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
