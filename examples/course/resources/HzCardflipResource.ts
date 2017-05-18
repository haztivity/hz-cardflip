/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
/**
 * @license
 * Copyright Davinchi. All Rights Reserved.
 */
import {Resource,ResourceController,$,EventEmitterFactory,DataOptions} from "@haztivity/core";
import "./jquery.flip";
@Resource(
    {
        name:"HzCardflip",
        dependencies:[
            $,
            EventEmitterFactory,
            DataOptions
        ]
    }
)
export class HzCardflipResource extends ResourceController {
    protected static readonly DEFAULTS = {
        
    };
    public static readonly NAMESPACE = "hzCardflip";
    protected _DataOptions:DataOptions;
    protected _cardflipInstance:any;
    protected _isOpen:boolean=false;
    protected _id;
    protected _namespace;

    /**
     * Recurso de tooltip para Haztivity.
     * @param _$
     * @param _EventEmitterFactory
     * @param _ScormService
     */
    constructor(_$: JQueryStatic, _EventEmitterFactory, _DataOptions) {
        super(_$, _EventEmitterFactory);
        this._DataOptions = _DataOptions;
    }

    init(options, config?) {
        this._config = config;
        this._id = new Date().getTime();
        this._namespace = HzCardflipResource.NAMESPACE + this._id;
        this._options = options;
        this.refresh();
    }
    public refresh(){
        if(this._cardflipInstance){
            this._cardflipInstance.destroy();
        }
        let flipOptions = this._DataOptions.getDataOptions(this._$element, "flip");
        this._options.flipOptions = this._$.extend(true,{},HzCardflipResource.DEFAULTS, flipOptions);
        this._$element.flip(this._options.flipOptions);
        this._cardflipInstance = this._$element.data("flipModel");
        this._assignEvents();
    }

    public getInstance(): any {
        return this._cardflipInstance;
    }
    public disable(){
        if(super.disable()){

        }
    }
    public enable(){
        if(super.enable()){

        }
    }

    protected _assignEvents(){
        this._$element.off("."+HzCardflipResource.NAMESPACE)
            .one("flip:done."+HzCardflipResource.NAMESPACE,this._onFlipDone.bind(this))
            .on("click."+HzCardflipResource.NAMESPACE+" hover."+HzCardflipResource.NAMESPACE,">*",this._onInteraction.bind(this));
    }
    protected _onInteraction(e){
        if(this.isDisabled()){
            e.stopPropagation();
        }
    }
    protected _onFlipDone (e){
        this._markAsCompleted();
    }
    public destroy(){
        if(this._cardflipInstance) {

        }
        super.destroy();
    }
}