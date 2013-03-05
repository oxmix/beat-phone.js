beat-phone.js
==========

Assistant while writing phone or html tag `<input>` transformer.

Author [Oxmix](http://oxmix.net/)

### Include this
```html
<script src="beat-phone.js" type="text/javascript"></script>
```

### Example 1
```html
<input type="text" id="phone">

<script type="text/javascript">
	$phone({element: 'phone'});
</script>
```

### Example 2
```html
<input type="text" id="phone-1" placeholder="phone here">
<input type="text" id="phone-2" value="9163333333">

<script type="text/javascript">
	$phone({
		element: 'phone-1',
		focusInit: true
	});

	$phone({
		element: 'phone-2',
		//phone: '9164444444'
	});
</script>
```

### Example 3
```html
<input type="text" id="phone-3">

<script type="text/javascript">
	// first init
	var phone = $phone({
		element: 'phone-3',
		mask: '+_ (____) __-__-__'
	});

	// if you need to destroy object
	phone.destroy();

	// if you want to init again
	phone.init();
</script>
```