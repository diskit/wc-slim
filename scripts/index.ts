import { Slim } from 'slim-js';
import {tag, template, useShadow} from 'slim-js/Decorators';

@tag("my-element")
@template("<div>test</div>")
@useShadow(true)
class MyElement extends Slim {

}