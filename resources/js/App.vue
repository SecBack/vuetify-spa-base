<template>
    <v-app>
        <AppHeader></AppHeader>
        <v-main>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>

export default {
    components: {
    }
}
</script>
