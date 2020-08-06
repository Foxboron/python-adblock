(function() {var implementors = {};
implementors["either"] = [{"text":"impl&lt;L, R, Target&gt; AsRef&lt;Target&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;Target&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;Target&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L, R&gt; AsRef&lt;str&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;str&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;str&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;L, R, Target&gt; AsRef&lt;[Target]&gt; for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsRef&lt;[Target]&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsRef&lt;[Target]&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["lifeguard"] = [{"text":"impl&lt;'a, T&gt; AsRef&lt;T&gt; for RcRecycled&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Recycleable,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T&gt; AsRef&lt;T&gt; for Recycled&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Recycleable,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["openssl"] = [{"text":"impl AsRef&lt;Asn1GeneralizedTimeRef&gt; for Asn1GeneralizedTime","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Asn1TimeRef&gt; for Asn1Time","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Asn1StringRef&gt; for Asn1String","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Asn1IntegerRef&gt; for Asn1Integer","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Asn1BitStringRef&gt; for Asn1BitString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Asn1ObjectRef&gt; for Asn1Object","synthetic":false,"types":[]},{"text":"impl AsRef&lt;BigNumContextRef&gt; for BigNumContext","synthetic":false,"types":[]},{"text":"impl AsRef&lt;BigNumRef&gt; for BigNum","synthetic":false,"types":[]},{"text":"impl AsRef&lt;CmsContentInfoRef&gt; for CmsContentInfo","synthetic":false,"types":[]},{"text":"impl AsRef&lt;ConfRef&gt; for Conf","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;DhRef&lt;T&gt;&gt; for Dh&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;DsaRef&lt;T&gt;&gt; for Dsa&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;EcGroupRef&gt; for EcGroup","synthetic":false,"types":[]},{"text":"impl AsRef&lt;EcPointRef&gt; for EcPoint","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;EcKeyRef&lt;T&gt;&gt; for EcKey&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;EcdsaSigRef&gt; for EcdsaSig","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for DigestBytes","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OcspBasicResponseRef&gt; for OcspBasicResponse","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OcspCertIdRef&gt; for OcspCertId","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OcspResponseRef&gt; for OcspResponse","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OcspRequestRef&gt; for OcspRequest","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OcspOneReqRef&gt; for OcspOneReq","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Pkcs12Ref&gt; for Pkcs12","synthetic":false,"types":[]},{"text":"impl AsRef&lt;Pkcs7Ref&gt; for Pkcs7","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;PKeyRef&lt;T&gt;&gt; for PKey&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; AsRef&lt;RsaRef&lt;T&gt;&gt; for Rsa&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;SrtpProtectionProfileRef&gt; for SrtpProtectionProfile","synthetic":false,"types":[]},{"text":"impl AsRef&lt;SslContextRef&gt; for SslContext","synthetic":false,"types":[]},{"text":"impl AsRef&lt;SslSessionRef&gt; for SslSession","synthetic":false,"types":[]},{"text":"impl AsRef&lt;SslRef&gt; for Ssl","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Stackable&gt; AsRef&lt;StackRef&lt;T&gt;&gt; for Stack&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl AsRef&lt;OpensslStringRef&gt; for OpensslString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for OpensslString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for OpensslString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;str&gt; for OpensslStringRef","synthetic":false,"types":[]},{"text":"impl AsRef&lt;[u8]&gt; for OpensslStringRef","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509VerifyParamRef&gt; for X509VerifyParam","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509StoreBuilderRef&gt; for X509StoreBuilder","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509StoreRef&gt; for X509Store","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509StoreContextRef&gt; for X509StoreContext","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509Ref&gt; for X509","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509Ref&gt; for X509Ref","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509ExtensionRef&gt; for X509Extension","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509NameRef&gt; for X509Name","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509NameEntryRef&gt; for X509NameEntry","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509ReqRef&gt; for X509Req","synthetic":false,"types":[]},{"text":"impl AsRef&lt;GeneralNameRef&gt; for GeneralName","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509AlgorithmRef&gt; for X509Algorithm","synthetic":false,"types":[]},{"text":"impl AsRef&lt;X509ObjectRef&gt; for X509Object","synthetic":false,"types":[]}];
implementors["pyo3"] = [{"text":"impl&lt;T:&nbsp;PyClass&gt; AsRef&lt;PyAny&gt; for PyCell&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'p, T, U&gt; AsRef&lt;U&gt; for PyRef&lt;'p, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PyClass + PyTypeInfo&lt;BaseType = U, BaseLayout = PyCellInner&lt;U&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: PyClass,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'p, T, U&gt; AsRef&lt;U&gt; for PyRefMut&lt;'p, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: PyClass + PyTypeInfo&lt;BaseType = U, BaseLayout = PyCellInner&lt;U&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: PyClass,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyBool","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyByteArray","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyBytes","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyComplex","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyDate","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyDateTime","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyTime","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyTzInfo","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyDelta","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyDict","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyFloat","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyList","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyModule","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyLong","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PySequence","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PySet","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyFrozenSet","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PySlice","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyString","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyTuple","synthetic":false,"types":[]},{"text":"impl AsRef&lt;PyAny&gt; for PyType","synthetic":false,"types":[]}];
implementors["regex_syntax"] = [{"text":"impl AsRef&lt;[u8]&gt; for Literal","synthetic":false,"types":[]}];
implementors["rental"] = [{"text":"impl AsRef&lt;&lt;SimpleRefDeref as Deref&gt;::Target&gt; for SimpleRefDeref","synthetic":false,"types":[]},{"text":"impl AsRef&lt;&lt;SimpleMutDeref as Deref&gt;::Target&gt; for SimpleMutDeref","synthetic":false,"types":[]},{"text":"impl&lt;H:&nbsp;'static + StableDeref, T:&nbsp;'static&gt; AsRef&lt;&lt;RentRef&lt;H, T&gt; as Deref&gt;::Target&gt; for RentRef&lt;H, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;H:&nbsp;'static + StableDeref + DerefMut, T:&nbsp;'static&gt; AsRef&lt;&lt;RentMut&lt;H, T&gt; as Deref&gt;::Target&gt; for RentMut&lt;H, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;H:&nbsp;'static + StableDeref, T:&nbsp;'static&gt; AsRef&lt;&lt;RentRefCell&lt;H, T&gt; as Deref&gt;::Target&gt; for RentRefCell&lt;H, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;H:&nbsp;'static + StableDeref + DerefMut, T:&nbsp;'static&gt; AsRef&lt;&lt;RentRefCellMut&lt;H, T&gt; as Deref&gt;::Target&gt; for RentRefCellMut&lt;H, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;H:&nbsp;'static + StableDeref + DerefMut, T:&nbsp;'static&gt; AsRef&lt;&lt;RentMutex&lt;H, T&gt; as Deref&gt;::Target&gt; for RentMutex&lt;H, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;H:&nbsp;'static + StableDeref, T:&nbsp;'static&gt; AsRef&lt;&lt;RentRwLock&lt;H, T&gt; as Deref&gt;::Target&gt; for RentRwLock&lt;H, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;H:&nbsp;'static + StableDeref, T:&nbsp;'static&gt; AsRef&lt;&lt;RentRwLockMut&lt;H, T&gt; as Deref&gt;::Target&gt; for RentRwLockMut&lt;H, T&gt;","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; AsRef&lt;[&lt;A as Array&gt;::Item]&gt; for SmallVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; AsRef&lt;[&lt;A as Array&gt;::Item]&gt; for ArrayVec&lt;A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array&gt; AsRef&lt;[&lt;A as Array&gt;::Item]&gt; for TinyVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["url"] = [{"text":"impl AsRef&lt;str&gt; for Url","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()