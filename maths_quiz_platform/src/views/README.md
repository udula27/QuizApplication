# View Components Readme 📖

👋 Welcome developers!

Please note that this project has predefined view components that you should stick to:

- `HomeView.vue`
- `LeaderboardView.vue`
- `LoginView.vue`
- `NotFoundView.vue`
- `QuizlnstructionsView.vue`
- `QuizResultView.vue`
- `QuizView.vue`

These components have been carefully designed to ensure consistency and maintainability. Please avoid creating new views or modifying the existing ones without a good reason.

If you encounter any problems or have suggestions for improvements, please don't hesitate to [open an issue](https://github.com/rajivaPavan/CarImagesWeb/issues/new) on our GitHub repository. We appreciate your feedback and will work to address any issues as soon as possible✋🏻

## Getting Started

To use these view components, simply import the desired component in your Vue file and add it to your template. For example:

```vue
<template>
  <div>
    <HomeView />
  </div>
</template>

<script>
import HomeView from './HomeView.vue'

export default {
  components: {
    HomeView
  }
}
</script>
```