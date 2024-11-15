<script>
	import Youtube from 'svelte-youtube-embed';
	import { HighlightSvelte } from 'svelte-highlight';
	import javascript from 'svelte-highlight/languages/javascript';
	import github from 'svelte-highlight/styles/github';
	import agate from 'svelte-highlight/styles/agate';

	const code = `
// state.svelte.js

class ComponentPageNumber {
	componentNumber = $state(100);

	decrement() {
		this.componentNumber--;
	}
}

export const componentPageNumber = new ComponentPageNumber();

****************

// Component.svelte

import { componentPageNumber } from '../routes/state.svelte.js';

  <button onclick={() => componentPageNumber.decrement()} >
		{componentPageNumber.componentNumber}
  </button>
`;
</script>

<section id="main" in:fade={{ duration: 280, delay: 320 }} out:fade={{ duration: 280 }}>
	<div class="transition-container">
		<div
			in:fade={{ duration: 300, delay: 400 }}
			out:fade={{ duration: 300 }}
			class="container flex h-auto w-[600px] flex-col gap-6 text-black"
		>
			<p class="mt-0 text-left text-sm">Summary.svelte</p>
			<p class="w-full">
				Well, I don't need help after all. It looks like I solved it through this project. This
				video was released today that helped me solve it from the <strong>Svelte Mastery</strong> channel:
			</p>

			<Youtube id="9MbjQJMwQsQ" altThumb={true} />
			<details class="-mt-5 select-none">
				<summary>How did I embed this video?</summary>
				With
				<a
					class="mb-10"
					href="https://embed.sveltethemes.dev/?ref=madewithsvelte.com"
					target="_blank"
					><span class="text-blue-500 underline"
						>svelte-youtube-embed. I can't find a way to set it to a time in the video, just from
						the beginning.</span
					></a
				>
			</details>
			<p>
				What I learned is that I need to instantiate the new class from the state.svelte.js
				component itself, instead of setting a new ComponentPageNumber() class on each load.
			</p>
		</div>
	</div>
</section>

<svelte:head>
	{@html agate}
</svelte:head>
<HighlightSvelte language={javascript} {code} />

<details class="mt-1 select-none">
	<summary>How did I create this code snippet (aka "code highlighting")?</summary>
	With
	<a class="mb-10" href="https://www.npmjs.com/package/svelte-highlight" target="_blank"
		><span class="text-blue-500 underline">svelte-highlight, and the 'agate' styling package.</span
		></a
	>
</details>

<!-- <HighlightSvelte language={javascript} {code2} /> -->

<style>
	.transition-container {
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
	}

	.transition-container > * {
		grid-row: 1;
		grid-column: 1;
	}
</style>
