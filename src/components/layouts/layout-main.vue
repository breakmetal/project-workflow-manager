<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row
            v-if="item.heading"
            :key="item.heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              @click=""
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            @click=""
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title @click="changeContent(item.route)">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="hidden-sm-and-down">Workflow Manager</span>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-menu bottom large>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            color="yellow"
            v-on="on"
          >
            <v-avatar color="purple"
              size="32px"
              item
            >
              <v-icon dark>mdi-account-circle</v-icon>
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(option, i) in options"
            :key="i"
          >
            <v-list-item-title >{{ option.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-content>
    <v-btn
      bottom
      color="blue"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="800px"
    >
      <v-card ref="form">
        <v-card-title class="grey darken-2">
          Create project
        </v-card-title>
        <v-card-text>
          <v-text-field placeholder="title"></v-text-field>
          <v-textarea placeholder="description"></v-textarea>
        </v-card-text>
        <v-container>
        </v-container>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn
            text
            color="primary"
            @click="dialog = false"
          >Cancel</v-btn>
          <v-btn
            text
            @click="dialog = false"
          >Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        { icon: 'settings', text: 'Projects without start', route: '/proyects'},
        { icon: 'settings', text: 'Projects under construction', route: '/proyects' },
        { icon: 'settings', text: 'Finished projects', route: '/proyects' },
      ],
      options: [
        {text: 'update'},
        {text: 'close session'}
      ]
    }),
    methods:{
      changeContent(route){
           this.$router.push(route)
        }

    }
  }
</script>