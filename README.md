<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# zlastIndexOfFalsy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the index of the last falsy element in a double-precision complex floating-point strided array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-zlast-index-of-falsy
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var zlastIndexOfFalsy = require( '@stdlib/blas-ext-base-zlast-index-of-falsy' );
```

#### zlastIndexOfFalsy( N, x, strideX )

Returns the index of the last falsy element in a double-precision complex floating-point strided array.

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0, 2.0, 3.0, 0.0, 0.0, 4.0, 5.0 ] );

var idx = zlastIndexOfFalsy( x.length, x, 1 );
// returns 4
```

<!-- eslint-enable max-len -->

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: stride length.

If the function is unable to find a falsy element, the function returns `-1`.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0 ] );

var idx = zlastIndexOfFalsy( x.length, x, 1 );
// returns -1
```

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to access every other element:

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0, 2.0, 3.0, 0.0, 0.0, 4.0, 5.0 ] );

var idx = zlastIndexOfFalsy( 3, x, 2 );
// returns 2
```

<!-- eslint-enable max-len -->

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

// Initial array...
var x0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 1.0, 2.0, 0.0, 0.0, 2.0, 3.0 ] );

// Create an offset view...
var x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Find index...
var idx = zlastIndexOfFalsy( 4, x1, 1 );
// returns 2
```

<!-- eslint-enable max-len -->

#### zlastIndexOfFalsy.ndarray( N, x, strideX, offsetX )

Returns the index of the last falsy element in a double-precision complex floating-point strided array using alternative indexing semantics.

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0, 2.0, 3.0, 0.0, 0.0, 4.0, 5.0 ] );

var idx = zlastIndexOfFalsy.ndarray( x.length, x, 1, 0 );
// returns 4
```

<!-- eslint-enable max-len -->

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of the strided array:

<!-- eslint-disable max-len -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 0.0, 0.0, 2.0, 3.0, 0.0, 0.0, 3.0, 4.0 ] );

var idx = zlastIndexOfFalsy.ndarray( 3, x, 1, x.length-3 );
// returns 1
```

<!-- eslint-enable max-len -->

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A complex number is falsy when both its real and imaginary components are falsy.
-   Both functions explicitly treat `NaN` values as falsy.
-   If unable to find a falsy element, both functions return `-1`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var bernoulli = require( '@stdlib/random-array-bernoulli' );
var Complex128Array = require( '@stdlib/array-complex128' );
var logEach = require( '@stdlib/console-log-each' );
var zlastIndexOfFalsy = require( '@stdlib/blas-ext-base-zlast-index-of-falsy' );

var xbuf = bernoulli( 10 * 2, 0.3, {
    'dtype': 'float64'
});
var x = new Complex128Array( xbuf.buffer );
logEach( '%s', x );

var idx = zlastIndexOfFalsy( x.length, x, 1 );
console.log( idx );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/zlast_index_of_falsy.h"
```

#### stdlib_strided_zlast_index_of_falsy( N, \*X, strideX )

Returns the index of the last falsy element in a double-precision complex floating-point strided array.

```c
#include "stdlib/complex/float64/ctor.h"

const double x[] = { 1.0, 2.0, 3.0, 4.0, 0.0, 0.0, 2.0, 3.0 };

CBLAS_INT idx = stdlib_strided_zlast_index_of_falsy( 4, (stdlib_complex128_t *)x, 1 );
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] stdlib_complex128_t*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.

```c
CBLAS_INT stdlib_strided_zlast_index_of_falsy( const CBLAS_INT N, const stdlib_complex128_t *X, const CBLAS_INT strideX );
```

<!-- lint disable maximum-heading-length -->

#### stdlib_strided_zlast_index_of_falsy_ndarray( N, \*X, strideX, offsetX )

<!-- lint enable maximum-heading-length -->

Returns the index of the last falsy element in a double-precision complex floating-point strided array using alternative indexing semantics.

<!-- eslint-disable max-len -->

```c
const double x[] = { 1.0, 2.0, 3.0, 4.0, 0.0, 0.0, 2.0, 3.0 };

CBLAS_INT idx = stdlib_strided_zlast_index_of_falsy_ndarray( 4, (stdlib_complex128_t *)x, 1, 0 );
```

<!-- eslint-enable max-len -->

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **X**: `[in] stdlib_complex128_t*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.
-   **offsetX**: `[in] CBLAS_INT` starting index.

```c
CBLAS_INT stdlib_strided_zlast_index_of_falsy_ndarray( const CBLAS_INT N, const stdlib_complex128_t *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   A complex number is falsy when both its real and imaginary components are falsy.
-   Both functions explicitly treat `NaN` values as falsy.
-   If unable to find a falsy element, both functions return `-1`.

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/zlast_index_of_falsy.h"
#include "stdlib/complex/float64/ctor.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    const double x[] = { 1.0, 2.0, 3.0, 4.0, 0.0, 0.0, 2.0, 3.0 };

    // Specify the number of indexed elements:
    const int N = 4;

    // Specify a stride:
    const int strideX = 1;

    // Find the index of the last falsy element:
    CBLAS_INT idx = stdlib_strided_zlast_index_of_falsy( N, (const stdlib_complex128_t *)x, strideX );

    // Print the result:
    printf( "index = %ld\n", (long)idx );
    // returns 2
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-zlast-index-of-falsy.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-zlast-index-of-falsy

[test-image]: https://github.com/stdlib-js/blas-ext-base-zlast-index-of-falsy/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-zlast-index-of-falsy/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-zlast-index-of-falsy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-zlast-index-of-falsy?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-zlast-index-of-falsy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-zlast-index-of-falsy/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-zlast-index-of-falsy/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-zlast-index-of-falsy/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-zlast-index-of-falsy/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-zlast-index-of-falsy/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-zlast-index-of-falsy/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-zlast-index-of-falsy/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-zlast-index-of-falsy/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-zlast-index-of-falsy/main/LICENSE

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
