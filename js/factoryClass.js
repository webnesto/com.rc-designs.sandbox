/**
 * @class Foo
 */
var Foo = (function () {
	//private class vars
	var _instanceCount = 0; // Number
	
	//private class methods
	/* assuming that the method's logic relates only to the class or is self contained (meaning - not dependent on the state of any external variables),
		the method can be included here, rather than on the instance.  Only methods dependent on instance state (such as getters/setters), 
		should be placed on the the instance itself (below) as each function exists in memory for each instance.
		
		Of course, it is arguable that if the method logic is not tightly coupled with the instance variables or any class variables, then the method is potentially
		usable outside of the scope of this class and should be made publicly available (possibly not even specifically associated with the class other than perhaps as a mixin).
		This depends entirely on personal preference, how re-usable the method is, and how important it is to keep the functional code all together for maintenance (such as in 
		the case of a large project).
		*/
	
	function _someLogic (
		arg1, // Number
		arg2, // String
		arg3  // Array
	) {
		// do some stuff with args and return something
		
		return "foo";
	}
	
	/**
	 * @constructor Foo
	 */
	function Foo(
		initVar // Object - some value passed at object instantiation
	){
		//private instance variables
		var _this = this, // Object - local reference to instance object, used for proper scoping in private vars
			_initVar = initVar, // Object
			_instancevar = _instanceCount, // Number
			_someUninitializedVar; // String
		
		//private instance methods
		function  _someInstanceLogic (
			myThing // Object
		) {
			//do some stuff that manipulates internal instance state (and therefore requires the method be here rather than on the class.
			return null;
		}
		
		//public (priviledged) instance methods
		_this.getInstanceVar = function () {	return _instancevar;	}
		
		_this.getNumberOfInstances = function () {	return _instanceCount;	}
		
		_this.getInitVar = function () {	return _initVar;	}
		
		
		//initialization
		_instanceCount++; //iterate class var
		
		return _this;  // returns Instance
	}
	
	//public (non-priviledged) instance methods
	Foo.prototype.reportPositionInTotal = function () {
		return "This is " + this.getInstanceVar() + " out of " + _instanceCount;
	}
	
	//public class methods
	Foo.getNumberOfInstances = function(){
		return _instanceCount;
	}
	
	return Foo;
})(); // Class is always a singleton