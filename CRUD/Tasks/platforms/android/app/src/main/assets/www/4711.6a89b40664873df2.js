"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4711],{4711:(j,u,a)=>{a.r(u),a.d(u,{Tab1PageModule:()=>T});var c=a(5150),d=a(177),g=a(4341),b=a(1307),s=a(8986),m=a(467),e=a(3953),p=a(1626),_=a(2727);function h(r,l){if(1&r){const n=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title",13),e.EFF(3,"Producto"),e.k0s(),e.j41(4,"ion-buttons",14)(5,"ion-button",15),e.bIt("click",function(){e.eBV(n);const o=e.XpG(2);return e.Njj(o.setOpen(!1))}),e.EFF(6,"Salir"),e.k0s()()()(),e.j41(7,"ion-content",16)(8,"ion-list",17)(9,"ion-item")(10,"ion-label"),e.EFF(11),e.k0s()(),e.j41(12,"ion-item")(13,"ion-label"),e.EFF(14),e.k0s()(),e.j41(15,"ion-item")(16,"ion-label"),e.EFF(17),e.k0s()(),e.j41(18,"ion-item")(19,"ion-label"),e.EFF(20),e.k0s()(),e.j41(21,"ion-item")(22,"ion-label"),e.EFF(23),e.k0s()(),e.j41(24,"ion-item")(25,"ion-button",18),e.bIt("click",function(){e.eBV(n);const o=e.XpG().$implicit,i=e.XpG();return e.Njj(i.confirmDelete(o.id))}),e.EFF(26,"Borrar"),e.k0s(),e.j41(27,"ion-button",19),e.bIt("click",function(){e.eBV(n);const o=e.XpG().$implicit,i=e.XpG();return e.Njj(i.navigateToUpdateProduct(o.id))}),e.EFF(28,"Editar"),e.k0s()()()()}if(2&r){const n=e.XpG(2);e.R7$(11),e.SpI("ID: ",n.producto.id,""),e.R7$(3),e.SpI("Nombre: ",n.producto.nombre,""),e.R7$(3),e.SpI("Descripcion: ",n.producto.descripcion,""),e.R7$(3),e.SpI("Precio: ",n.producto.precio,""),e.R7$(3),e.SpI("Stock: ",n.producto.stock,"")}}function P(r,l){if(1&r){const n=e.RV6();e.j41(0,"ion-item")(1,"ion-icon",9),e.bIt("click",function(){const o=e.eBV(n).$implicit,i=e.XpG();return e.Njj(i.setOpen(!0,o.id))}),e.k0s(),e.j41(2,"ion-icon",10),e.bIt("click",function(){const o=e.eBV(n).$implicit,i=e.XpG();return e.Njj(i.navigateToUpdateProduct(o.id))}),e.k0s(),e.j41(3,"ion-icon",11),e.bIt("click",function(){const o=e.eBV(n).$implicit,i=e.XpG();return e.Njj(i.confirmDelete(o.id))}),e.k0s(),e.j41(4,"ion-label"),e.EFF(5),e.k0s(),e.j41(6,"ion-label"),e.EFF(7),e.k0s(),e.j41(8,"ion-modal",12),e.DNE(9,h,29,5,"ng-template"),e.k0s()()}if(2&r){const n=l.$implicit,t=e.XpG();e.R7$(5),e.JRh(n.nombre),e.R7$(2),e.JRh(n.stock),e.R7$(),e.Y8G("isOpen",t.isModalOpen)}}const f=[{path:"",component:(()=>{var r;class l{constructor(t,o,i,F){this.http=t,this.alertController=o,this.productosService=i,this.router=F,this.listaProductos=[],this.isModalOpen=!1,this.producto={}}ngOnInit(){this.getProducts()}navigateToAddProduct(){this.router.navigate(["/products/new"]),this.getProducts()}getProducts(){try{this.productosService.getProducts(),this.productosService.productos$.subscribe(t=>{this.listaProductos=t})}catch{throw new Error("Ocurrio un error al listar los productos")}}setOpen(t,o){try{this.isModalOpen=t,o&&this.getProductById(o)}catch{throw new Error("Ocurrio un error al abrir el modal")}}getProductById(t){try{this.productosService.getProductByID(t).subscribe(o=>{this.producto=o})}catch{throw new Error("Ocurrio un error al buscar la informacion del producto")}}confirmDelete(t){var o=this;return(0,m.A)(function*(){try{yield(yield o.alertController.create({header:"Confirmar eliminaci\xf3n",message:"\xbfEst\xe1s seguro de que deseas eliminar este producto?",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:()=>{console.log("Acci\xf3n cancelada")}},{text:"Eliminar",handler:()=>{o.deleteProduct(t)}}]})).present()}catch{throw new Error("Ocurrio un error al procesar la alerta")}})()}navigateToUpdateProduct(t){try{this.router.navigate(["/products/update",t])}catch{throw new Error("Ocurrio un error al eliminar")}}deleteProduct(t){var o=this;return(0,m.A)(function*(){try{o.productosService.deleteProduct(t).subscribe(()=>{console.log("Producto eliminado exitosamente"),o.getProducts()},i=>{console.error("Error al eliminar el producto",i)})}catch{throw new Error("Ocurrio un error al eliminar")}})()}}return(r=l).\u0275fac=function(t){return new(t||r)(e.rXU(p.Qq),e.rXU(c.hG),e.rXU(_.J),e.rXU(s.Ix))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-tab1"]],decls:20,vars:4,consts:[[3,"translucent"],["color","success","slot","end","name","add-circle","size","large",3,"click"],[3,"fullscreen"],[3,"inset"],[1,"fonttexts"],["color","primary","slot","end","name","add-circle","size","large"],["color","warning","slot","end","name","create","size","large"],["color","danger","slot","end","name","close-circle","size","large"],[4,"ngFor","ngForOf"],["color","primary","slot","end","name","add-circle-outline","size","large",3,"click"],["color","warning","slot","end","name","create-outline","size","large",3,"click"],["color","danger","slot","end","name","close-circle-outline","size","large",3,"click"],[3,"isOpen"],["strong","true"],["slot","end"],[3,"click"],[1,"ion-padding"],["lines","inset"],["shape","round","strong","true","slot","start","color","danger",3,"click"],["slot","end","shape","round","color","warning","strong","true",3,"click"]],template:function(t,o){1&t&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3," Productos "),e.k0s(),e.j41(4,"ion-icon",1),e.bIt("click",function(){return o.navigateToAddProduct()}),e.k0s()()(),e.j41(5,"ion-content",2)(6,"ion-list",3)(7,"ion-item")(8,"ion-label",4)(9,"h2")(10,"b"),e.EFF(11,"Nombre"),e.k0s()()(),e.j41(12,"ion-label",4)(13,"h2")(14,"b"),e.EFF(15,"Stock"),e.k0s()()(),e.nrm(16,"ion-icon",5)(17,"ion-icon",6)(18,"ion-icon",7),e.k0s(),e.DNE(19,P,10,3,"ion-item",8),e.k0s()()),2&t&&(e.Y8G("translucent",!0),e.R7$(5),e.Y8G("fullscreen",!0),e.R7$(),e.Y8G("inset",!0),e.R7$(13),e.Y8G("ngForOf",o.listaProductos))},dependencies:[c.Jm,c.QW,c.W9,c.eU,c.iq,c.uz,c.he,c.nf,c.BC,c.ai,c.Sb,d.Sq]}),l})()}];let k=(()=>{var r;class l{}return(r=l).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[s.iI.forChild(f),s.iI]}),l})(),T=(()=>{var r;class l{}return(r=l).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[c.bv,d.MD,g.YN,b.S,k,p.q1]}),l})()}}]);