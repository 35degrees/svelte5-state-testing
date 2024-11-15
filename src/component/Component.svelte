<script>
	import { pageIndex } from '../routes/store.js';
	import { componentPageNumber } from '../routes/state.svelte.js';
	import { fade } from 'svelte/transition';
	import { onDestroy } from 'svelte';
	let pageIndexVal = $state();

	const unsubscribe = pageIndex.subscribe((value) => {
		pageIndexVal = value;
	});

	console.log(pageIndexVal);

	onDestroy(unsubscribe);
</script>

<section id="main" in:fade={{ duration: 280, delay: 320 }} out:fade={{ duration: 280 }}>
	{#if pageIndexVal === 1}
		<div class="transition-container">
			<div
				in:fade={{ duration: 300, delay: 400 }}
				out:fade={{ duration: 300 }}
				class="container relative flex h-[480px] w-[500px] flex-col gap-6 text-black"
			>
				<p class="mt-0 text-left text-sm">Component.svelte</p>
				<div class="text-md flex flex-col gap-4 text-left">
					<p>
						You are now in the component. Click here to decrement a second number with the class <span
							class="underline">ComponentPageNumber</span
						>:
					</p>
				</div>
				<button
					onclick={() => componentPageNumber.decrement()}
					class="w-1/5 rounded-xl border-none bg-orange-400 px-5 py-2 text-3xl text-white"
				>
					{componentPageNumber.componentNumber}
				</button>
				<div class="text-md flex flex-col gap-4 text-left">
					<p>
						Remember this number and you'll return here. Please go to back to the main +page.svelte
						to review the state changes:
					</p>
				</div>
				<button
					onclick={() => pageIndex.update((v) => (v = 2))}
					class="absolute -bottom-20 w-1/2 rounded-xl border-none bg-slate-400 px-5 py-2 text-lg text-white"
				>
					Return to +page.svelte
				</button>
			</div>
		</div>
	{:else if pageIndexVal === 3}
		<div class="transition-container">
			<div
				in:fade={{ duration: 300, delay: 400 }}
				out:fade={{ duration: 300 }}
				class="container relative flex h-[480px] w-[500px] flex-col gap-6 text-black"
			>
				<p class="mt-0 text-left text-sm">Component.svelte</p>
				<p>
					Here's a look at the <span class="underline">ComponentPageNumber</span> after coming back:
				</p>

				<button class="w-1/5 rounded-xl border-none bg-orange-400 px-5 py-2 text-3xl text-white">
					{componentPageNumber.componentNumber}
				</button>
				<p>
					Wow, it actually worked this time. Hopefully, I'm recreating the scenario properly. See
					the summary page to find out how it works.
				</p>
				<button
					onclick={() => pageIndex.update((v) => (v = 4))}
					class="absolute -bottom-20 w-1/2 rounded-xl border-none bg-slate-400 px-5 py-2 text-lg text-white"
				>
					Summary
				</button>
			</div>
		</div>
	{/if}
</section>

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
	#main {
		margin-top: 10rem;
	}
</style>
