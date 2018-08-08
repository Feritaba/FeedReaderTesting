//The spec file that Jasmine will read

$(function() {

	describe('RSS Feeds', function() {

		// The allFeeds variable has been defined and it's not empty
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		// All URLs are defined and they're not empty
		it('url defined', function() {
			for(let feed of allFeeds) {
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(0);
			}
		});

		// All names are defined and they're not empty
		it('name defined', function() {
			for(let feed of allFeeds) {
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0);
			}
		});
	});

	// "The menu"
	describe('The menu', function(){
		const body = $('body');
		// The menu is hidden by defult

		it('menu is hidden', function(){
			expect(body.hasClass('menu-hidden')).toBe(true);
		});

		// The menu changes to hide/show by click
		it('menu changes hide/show', function(){
			const menu = $('.menu-icon-link');

			menu.click();
			expect(body.hasClass('menu-hidden')).toBe(false);

			menu.click();
			expect(body.hasClass('menu-hidden')).toBe(true);
		});
	});

	// "Initial Entries"
	describe('Initial Entries', function(){

		// After loadFeed is called there is at least one entry and feed
		beforeEach(function(done){
			loadFeed(0, function(){
				done();
			});
			
		});

		it('has at least one entry', function(){
			let entries = $('.feed .entry');
			expect(entries.length).toBeGreaterThan(0);
		});
	});

	// "New Feed Selection"
	describe('New Feed Selection', function() {

		// When a new feed is loaded the content changes
		let feedOne;
		let feedTwo;
		beforeEach(function(done){
			loadFeed(0);
			feedOne = $('.feed').html();
			done();
		});
		afterEach(function(done){
			loadFeed(1);
			feedTwo = $('.feed').html();
			done();
		});
		it('changes content', function(done) {
			expect(feedOne).not.toEqual(feedTwo);
			done();
		});
	});
}());