<nav>
	<a href="/logout">Logout</a>
</nav>

<slot />

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	nav {
		display: flex;
		justify-content: end;
		padding: 20px;
		margin-bottom: 20px;
		box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
	}
	a {
		text-decoration: none;
		color: unset;
		border: 1px solid #000;
		border-radius: 2px;
		padding: 10px;
	}
	a:hover {
		background: rgba(0, 0, 0, 0.15);
	}
</style>
