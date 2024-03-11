<script lang="ts">
	export let linkText: string;
	export let linkDesc: string;
	export let linkHref: string;
</script>

<p class="text-gray-500 dark:text-gray-400 text-center">
	{linkDesc}
	<a
		target="_blank"
		href={linkHref}
		class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
	>
		{linkText}
		<svg
			class="w-4 h-4 ms-2 rtl:rotate-180"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 14 10"
		>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M1 5h12m0 0L9 1m4 4L9 9"
			/>
		</svg>
	</a>
</p>
