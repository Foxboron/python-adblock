(function() {var implementors = {};
implementors["adblock"] = [{"text":"impl UpperHex for NetworkFilterMask","synthetic":false,"types":[]},{"text":"impl UpperHex for CosmeticFilterMask","synthetic":false,"types":[]}];
implementors["itertools"] = [{"text":"impl&lt;'a, I&gt; UpperHex for Format&lt;'a, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: Iterator,<br>&nbsp;&nbsp;&nbsp;&nbsp;I::Item: UpperHex,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["openssl"] = [{"text":"impl UpperHex for CMSOptions","synthetic":false,"types":[]},{"text":"impl UpperHex for OcspFlag","synthetic":false,"types":[]},{"text":"impl UpperHex for Pkcs7Flags","synthetic":false,"types":[]},{"text":"impl UpperHex for SslOptions","synthetic":false,"types":[]},{"text":"impl UpperHex for SslMode","synthetic":false,"types":[]},{"text":"impl UpperHex for SslVerifyMode","synthetic":false,"types":[]},{"text":"impl UpperHex for SslSessionCacheMode","synthetic":false,"types":[]},{"text":"impl UpperHex for ExtensionContext","synthetic":false,"types":[]},{"text":"impl UpperHex for ShutdownState","synthetic":false,"types":[]},{"text":"impl UpperHex for X509CheckFlags","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; UpperHex for ArrayVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: UpperHex,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; UpperHex for TinyVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: UpperHex,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()