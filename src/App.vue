<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #EFEEF4;
  -webkit-user-select: none;
}

a,
a:hover,
a:active,
a:visited {
  display: block;
  color: inherit;
  text-decoration: none;
}

div {
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

input {
  outline: 0;
  box-shadow: none;
  -webkit-appearance: none;
}

.page-wrap {
  width: 100%;
  margin: auto;
  padding-left: 168px;
}
</style>
