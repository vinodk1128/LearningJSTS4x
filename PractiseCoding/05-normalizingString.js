
normalizeJsBasicsLabel(" ---Search@ @Box--- ");

function normalizeJsBasicsLabel(label) {

    const normalise =
        (s) => s
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');

    console.log(`js-basic-${normalise(label)}`);
}