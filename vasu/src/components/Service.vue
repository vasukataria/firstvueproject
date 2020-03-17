<template>
<div class="services-bar">
  <div class="container">
   <h1 class="py-4">Our Best Services </h1>
   <!-- Services Section -->
   <div class="row">
      <div class="col-lg-4 mb-4" v-for="(obj,key) in ServiceJSON" :key="key">
     <div class="card h-100">
      <div class="card-img">
       <img class="img-fluid" v-bind:src="obj.img" alt="" />
      </div>
      <div class="card-body">
       <h4 class="card-header">{{obj.title}}</h4>
       <p class="card-text">{{obj.desc}}</p>
      </div>
     </div>
      </div>
   </div>
   <!-- /.row -->
  </div>
 </div>


</template>

<script>
export default{

    data:() =>({
    ServiceJSON: [
    {
        img: require('@/assets/images/services-img-01.jpg'),
        title: "Analytics",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
    },
    {
        img: "../assets/images/services-img-02.jpg",
        title:"Applications",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
    },
    {
        img: "../assets/images/services-img-03.jpg",
        title:" Business Process",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
    },
    {
        img: "../assets/images/services-img-04.jpg",
        title:"Consulting",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
    },
    {
        img: "../assets/images/services-img-05.jpg",
        title:"Infrastructure",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
    },
    {
        img: "../assets/images/services-img-06.jpg",
        title:"Product Engineering",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
    },
    ]
    })

}


</script>


<style>

</style>