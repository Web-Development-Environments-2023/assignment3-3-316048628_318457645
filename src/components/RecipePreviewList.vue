<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-col>
      <b-row v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" @click.native='saveSeen(r.id)'/> 
      </b-row>
    </b-col>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
    recipes:{
      type: Array,
      required: true
    },
  },
  data() {
    return {
      // recipes: [] // not needed - we get in props
    };
  },
mounted() {
    // this.updateRecipes();
  },
  methods: {
    // async updateRecipes() {
    //   try {
    //     const response = await this.axios.get(
    //       this.$root.store.server_domain + "/recipes/random",
    //       // "http://localhost:3000/recipes/random",
    //     );

    //     console.log(response);
    //     const recipes = response.data.recipes;
    //     this.recipes = [];
    //     this.recipes.push(...recipes);
    //     // console.log(this.recipes);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    async saveSeen(recipeId) {
          //check if user connected
          console.log("in save seen");
          if(this.$root.store.username){
            //send post request to save lastSeen
            const response = await this.axios.post(
            this.$root.store.server_domain +"/users/lastWatched",
            {
                //the recipe id in body req
                recipe_id : recipeId
            },
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
