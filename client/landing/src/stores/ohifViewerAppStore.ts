import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import type Keycloak from "keycloak-js";

export const useOhifAppStore = defineStore('ohifAppStore', {
    state: () => {
      return {
        keyCloak:0
      }
    },
  }
)
