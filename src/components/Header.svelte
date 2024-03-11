<script>
	import SearchInput from '../ui/SearchInput.svelte';
</script>

<header class="my-5 w-full">
	<nav class="row">
		<SearchInput on:form_submitted />
	</nav>
</header>
