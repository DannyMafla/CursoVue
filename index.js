
let app = new Vue({
	el: "#app",
	data:{
		title: "Mis Tareas",
		newTask: "",
		idEdicion:-1,
		tasks: [
			{
				name: "Aprender Js", 
				done: false
			},
			{
				name: "Aprender Laraverl", 
				done: false
			},
			
						{
				name: "Aprender genexus", 
				done: true
			},
			
			{
				name: "Aprender java", 
				done: true
			},
			
			{
				name: "Aprender Easy Flow", 
				done: false
			}
		]
	},
	methods: {
		addTask: function () {
			if (this.newTask !== "") {
				this.tasks.push({
					name: this.newTask,
					done: false
				});
				this.newTask = "";
			}
		},
		
		editarTask:function(task){
		
		idEdicion=this.tasks.indexOf(task)		
		$("#modalEdicion").modal("show");
		$("#txtEdicionNombre").val(this.tasks[idEdicion].name)
		}, 
		
		GuardarEdicion:function(){
		

		 this.tasks[idEdicion].name=$("#txtEdicionNombre").val()
		 $("#modalEdicion").modal("hide");


		 },
		
		deleteTask: function (task) {
			this.tasks.splice(this.tasks.indexOf(task),1);
		},
		makeAsDone: function (task) {
			console.log(task.name)
			task.done = true;
		}
	},
	
	computed:{
		activeTask: function(){
			return this.tasks.filter(task=> !task.done);
		},
		inactiveTask: function(){
			return this.tasks.filter(task=> task.done);
		}

	}
});