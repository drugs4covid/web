<template>
  <v-container>
    <v-card width="175px">

      <v-row justify="center" dense>
        <v-col class="text-center">
          <v-avatar color="rgba(0, 0, 0, 0.15)" width="125px" height="125px">
            <v-img v-if="img" :src="img" contain/>
            <span v-else v-text="nameShort"/>
          </v-avatar>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col class="text-center">
          <span>{{ name }}</span>
        </v-col>
      </v-row>

      <v-row justify="center" class="mt-1">
        <v-chip-group>
          <v-chip label outlined>
            {{group}}
          </v-chip>
          <v-chip label>
            {{ institution }}
          </v-chip>
        </v-chip-group>
      </v-row>

      <v-row justify="center">
        <v-btn icon plain v-show="twitter" :href="'https://twitter.com/' + twitter">
          <v-icon color="#1DA1F2">mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon plain v-show="linkedin" :href="'https://www.linkedin.com/in/' + linkedin">
          <v-icon color="#0077b5">mdi-linkedin</v-icon>
        </v-btn>
        <v-btn icon plain v-show="github" :href="'https://github.com/' + github">
          <v-icon color="#c9510c">mdi-github</v-icon>
        </v-btn>
        <v-btn icon plain v-show="email" :href="'mailto:' + email">
          <v-icon color="#4285F4">mdi-email</v-icon>
        </v-btn>
      </v-row>

    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "TeamCard",
  props: {
    name: String,
    role: String,
    group: String,
    institution: String,
    img: {
      type: String,
      default: null,
    },
    twitter: {
      type: String,
      default: null,
    },
    github: {
      type: String,
      default: null,
    },
    linkedin: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      default: null,
    }
  },
  computed: {
    nameShort(){
      return this.name.split(" ").map(item => {
        return item.charAt(0)
      }).join('')
    }
  }
}
</script>

<style scoped>

</style>