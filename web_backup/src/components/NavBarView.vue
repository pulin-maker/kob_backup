<template>
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
        <div class="container">
            <router-link class="navbar-brand" :to="{name: 'pk_index'}">King of Bot</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link :class="bot_name == 'pk_index' ? 'nav-link active' : 'nav-link'" aria-current="page" :to="{name: 'pk_index'}">pk</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="bot_name == 'record_index' ? 'nav-link active' : 'nav-link'" :to="{name: 'record_index'}">record</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :class="bot_name == 'ranklist_index' ? 'nav-link active' : 'nav-link'" :to="{name: 'ranklist_index'}">ranklist</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <div class="dropdown">
                            <router-link class="btn btn-secondary dropdown-toggle" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                MambaGo
                            </router-link>
                            <ul class="dropdown-menu">
                                <li><router-link class="dropdown-item" :to="{name: 'mybot_index'}">My Bot</router-link></li>
                                <li><router-link class="dropdown-item" href="#">log in</router-link></li>
                                <li><router-link class="dropdown-item" href="#">log out</router-link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed } from 'vue'

export default {
    setup() {
        const route = useRoute();
        let bot_name = computed(() => route.name);

        return {
            bot_name
        }
    }
}

</script>

<style></style>