<template>
    <div>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/New">New</router-link></li>
            <li><router-link to="/Contact">Contact</router-link></li>
            <li><router-link to="/About">About</router-link></li>
        </ul>
    </div>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'ComNavigation',
  props: {
    msg: String
  },
  components: {
  
  }

}
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
</style>