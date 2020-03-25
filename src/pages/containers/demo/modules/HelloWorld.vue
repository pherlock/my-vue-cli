<template>
	<pxz-content/>
</template>

<script>
import HelloWorld from '@/pages/components/demo/HelloWorld';

export default {
	name: 'hello-world',
	components: {
		'pxz-content': HelloWorld
	},
	data() {
		return {
			msg: 'Welcome to Your Vue.js App'
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
