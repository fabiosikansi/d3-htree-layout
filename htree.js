var hTreeLayout = (d,branchLength,fraction) => {
	branchLength = parseFloat(branchLength);
	fraction = parseFloat(fraction);

	if (d.depth == 0) {
		d.x = 0.0;
		d.y = 0.0;
	} else {
		if (d.depth % 2 == 1) {
			if (d.id == d.parent.children[0].id) {
				d.x = d.parent.x - branchLength;
				d.y = d.parent.y;
			} else {
				d.x = d.parent.x + branchLength;
				d.y = d.parent.y;
			}
		} else {
			if (d.id == d.parent.children[0].id) {
				d.x = d.parent.x;
				d.y = d.parent.y - branchLength;
			} else {
				d.x = d.parent.x;
				d.y = d.parent.y + branchLength;
			}
		}
		branchLength = branchLength / fraction;
	}
	if (typeof d.children != "undefined") {
		if (typeof d.children[0] != "undefined") hTreeLayout(d.children[0],branchLength,fraction);
		if (typeof d.children[1] != "undefined") hTreeLayout(d.children[1],branchLength,fraction);
	}
	return d;
}
