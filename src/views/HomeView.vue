<template>
  <div id="home">
    <b-container>
        <b-card-group deck>
          <b-card v-for="tool in toolItems"
                  :key=tool.title
                  :title=tool.title
                  :img-src=tool.img
                  :img-alt=tool.img_alt img-top>

            <b-card-text>{{tool.description}}</b-card-text>
            <template #footer>
              <small class="text-muted">{{ tool.button_text }}</small>
            </template>
          </b-card>
        </b-card-group>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data: () => ({
    toolItems:[
      {
        title: 'Search engine',
        img: 'https://placekitten.com/g/400/450',
        img_alt: 'Image',
        description: 'Tool description',
        button_text: 'Start Searching',
      },
      {
        title: 'Search engine',
        img: 'https://placekitten.com/g/400/450',
        img_alt: 'Image',
        description: 'Tool description',
        button_text: 'Start Searching',
      },
      {
        title: 'Search engine',
        img: 'https://placekitten.com/g/400/450',
        img_alt: 'Image',
        description: 'Tool description',
        button_text: 'Start Searching',
      },
    ],
  }),
}
</script>
